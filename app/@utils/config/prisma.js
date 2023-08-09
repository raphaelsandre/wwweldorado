'use client';
import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';

const prisma = new PrismaClient();
let prodVitrine = [];

useEffect(async () => {
  const prod = await prisma.produtos.findMany({
    where: { cod_for: 332 },
    take: 10
  });
  prodVitrine.push(prod);
}, []);

const handleSearh = async (query) => {
  await prisma.produtos.findMany(
    {
      where: { desc: { contains: 'arroz' } }
    },
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
};
handleSearh();
export { prodVitrine, prisma, handleSearh };
