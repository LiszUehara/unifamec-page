import { getCurrentUser } from '@/app/lib/auth';
import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        modality: true,
        syllabus: true,
        price: true,
        duration: true,
        isActive: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!course) {
      return NextResponse.json({ error: 'Curso não encontrado' }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error('Erro ao buscar curso:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar curso' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser(request);
  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id }
    });

    if (!course) {
      return NextResponse.json({ error: 'Curso não encontrado' }, { status: 404 });
    }

    if (course.authorId !== user.id) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 403 });
    }
    const data = await request.json();
    console.log('Dados recebidos para atualização:', data);
    const updatedCourse = await prisma.course.update({
      where: { id: params.id },
      data: {
        ...data,
        duration: data.duration ? parseInt(data.duration, 10) : course.duration,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error('Erro ao atualizar curso:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar curso' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser(request);
  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id }
    });

    if (!course) {
      return NextResponse.json({ error: 'Curso não encontrado' }, { status: 404 });
    }

    if (course.authorId !== user.id) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 403 });
    }

    await prisma.course.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ message: 'Curso deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar curso:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar curso' },
      { status: 500 }
    );
  }
}