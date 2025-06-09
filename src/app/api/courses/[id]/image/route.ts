import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id },
      select: { image: true }
    });

    if (!course?.image) {
      return new NextResponse(null, { status: 404 });
    }

    return new NextResponse(course.image, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar imagem:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar imagem' },
      { status: 500 }
    );
  }
}