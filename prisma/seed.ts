// prisma/seed.ts
const { PrismaClient, Role } = require('@prisma/client');
const { readFileSync } = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'instrutor@example.com',
      name: 'João Instrutor',
      password: '$2a$10$K7VYVz7UZ5J5Z5Z5Z5Z5Z.5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z', // senha: "senha123" (hash bcrypt)
      role: Role.USER,
    },
  });

  console.log(`Usuário criado com ID: ${user.id}`);

  const imagePaths = [
    path.join(__dirname, 'curso1.jpg'),
    path.join(__dirname, 'curso2.webp'),
    path.join(__dirname, 'curso3.png'),
  ];

  const images = imagePaths.map((imgPath) => {
    try {
      return readFileSync(imgPath);
    } catch (error) {
      console.warn(`Imagem não encontrada: ${imgPath}`);
      return Buffer.from('');
    }
  });

  const coursesData = [
    {
      title: 'Direito Constitucional Avançado',
      description: 'Estudo aprofundado da Constituição Federal e suas implicações práticas.',
      modality: 'Mestrado',
      category: 'Presencial',
      syllabus: `
        Módulo 1: Princípios Fundamentais
        Módulo 2: Direitos e Garantias Fundamentais
        Módulo 3: Organização do Estado
        Módulo 4: Controle de Constitucionalidade
        Módulo 5: Jurisprudência do STF
      `,
      price: 1500.00,
      duration: 4,
      isActive: true,
      image: images[0],
    },
    {
        title: 'Enfermagem em UTI e Emergências',
      description: 'Capacitação para atuação em unidades de terapia intensiva e situações de emergência.',
      modality: 'Enfermagem',
      category: 'Semipresencial',
      syllabus: `
        Módulo 1: Fundamentos de Enfermagem em UTI
        Módulo 2: Monitoramento de Pacientes Críticos
        Módulo 3: Protocolos de Emergência
        Módulo 4: Farmacologia Aplicada
        Módulo 5: Simulações Práticas
      `,
      price: 980.50,
      duration: 4,
      isActive: true,
      image: images[1],
    },
    {
      title: 'Psicologia Clínica: Abordagem Cognitivo-Comportamental',
      description: 'Formação em TCC para atuação clínica com diversos perfis de pacientes.',
      modality: 'Bacharelado',
      category: 'EAD',
      syllabus: `
        Módulo 1: Fundamentos da TCC
        Módulo 2: Técnicas de Avaliação Psicológica
        Módulo 3: Intervenções para Transtornos de Ansiedade
        Módulo 4: Terapia para Depressão
        Módulo 5: Estudos de Caso
      `,
      price: 870.75,
      duration: 4,
      isActive: true,
      image: images[2],
    },
  ];

  for (const courseData of coursesData) {
    const course = await prisma.course.create({
      data: {
        ...courseData,
        authorId: user.id,
      },
    });
    console.log(`Curso criado com ID: ${course.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });