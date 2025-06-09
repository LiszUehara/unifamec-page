import { getCurrentUser } from '@/app/lib/auth';
import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  const user = await getCurrentUser(request);
  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const modality = formData.get('modality') as string;
    const syllabus = formData.get('syllabus') as string;
    const price = parseFloat(formData.get('price') as string);
    const duration = parseInt(formData.get('duration') as string);
    const file = formData.get('image') as File | null;

    let imageBuffer = null;
    if (file) {
      const bytes = await file.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }
    console.log(user)

    const course = await prisma.course.create({
      data: {
        title,
        description,
        category,
        modality,
        syllabus,
        price,
        duration,
        image: imageBuffer,
        author: {
      connect: {
        id: user.id
      }
    }
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error('Erro ao criar curso:', error);
    return NextResponse.json(
      { error: 'Erro ao criar curso' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const category = searchParams.get('category');
    const modality = searchParams.get('modality');
    const isActive = searchParams.get('isActive');

    const courses = await prisma.course.findMany({
      where: {
      ...(category && { category }),
      ...(title && { title: { contains: title, mode: 'insensitive' } }),
      ...(modality && { modality }),
      ...(isActive && { isActive: isActive === 'true' })
      },
      select: {
      id: true,
      title: true,
      description: true,
      category: true,
      modality: true,
      price: true,
      duration: true,
      isActive: true,
      syllabus: true,
      },
      orderBy: {
      createdAt: 'desc'
      }
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error('Erro ao buscar cursos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar cursos' },
      { status: 500 }
    );
  }
}