import { prisma } from '../../@utils/config/prisma';

const result = await prisma.produtos.findMany({
  where: { desc: { contains: query } }
});
console.log(result);
