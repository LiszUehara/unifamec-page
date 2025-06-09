import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { useEffect, useState } from 'react';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

type Role = 'USER' | 'ADMIN' | 'INSTRUCTOR';

interface DecodedToken extends JwtPayload {
  userId: string;
  email: string;
  role: Role;
}

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (
  userId: string,
  email: string,
  role: Role
): string => {
  return jwt.sign(
    {
      userId,
      email,
      role,
      iat: Math.floor(Date.now() / 1000),
    },
    JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
};

export const verifyToken = (token: string): DecodedToken => {
  try {
    return jwt.verify(token, JWT_SECRET) as DecodedToken;
  } catch (error) {
    throw new Error('Token inválido');
  }
};

export const getTokenFromRequest = (request: Request): string | null => {
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
};

// Middleware para proteger rotas com função handler (App Router)
export const withAuth = (
  handler: (request: Request, context: any, user: DecodedToken) => Promise<Response>,
  requiredRoles: Role[] = []
) => {
  return async (request: Request, context: any) => {
    try {
      const token = getTokenFromRequest(request);
      if (!token) {
        return NextResponse.json(
          { error: 'Token de acesso necessário' },
          { status: 401 }
        );
      }

      const decoded = verifyToken(token);

      if (requiredRoles.length > 0 && !requiredRoles.includes(decoded.role)) {
        return NextResponse.json(
          { error: 'Acesso negado. Permissões insuficientes.' },
          { status: 403 }
        );
      }

      return handler(request, context, decoded);
    } catch (error) {
      return NextResponse.json(
        { error: 'Token inválido ou expirado' },
        { status: 401 }
      );
    }
  };
};

// Middleware client-side
export const requireAuth = (): boolean => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/auth/login';
      return false;
    }

    try {
      const decoded = jwt.decode(token) as DecodedToken;
      if (decoded && decoded.exp && decoded.exp * 1000 > Date.now()) {
        return true;
      }
      localStorage.removeItem('authToken');
      window.location.href = '/auth/login';
    } catch {
      localStorage.removeItem('authToken');
      window.location.href = '/auth/login';
    }
  }
  return false;
};

// Hook de autenticação para uso em componentes React
export const useAuth = () => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwt.decode(token) as DecodedToken;
        if (decoded && decoded.exp && decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
        } else {
          localStorage.removeItem('authToken');
        }
      } catch {
        localStorage.removeItem('authToken');
      }
    }
    setLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    const decoded = jwt.decode(token) as DecodedToken;
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    window.location.href = '/auth/login';
  };

  return { user, login, logout, loading };
};
