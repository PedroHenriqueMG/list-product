/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { productSchema } from "@/interface/productSchema";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const products = (await ctx.db.products.findMany()).sort((a, b) => {
        return a.value - b.value;
      });
      return {
        status: 201,
        message: "Products created successfully",
        result: products,
      };
    } catch (error) {
      return {
        status: 401,
        message: `${error}`,
      };
    }
  }),

  create: publicProcedure
    .input(productSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const products = await ctx.db.products.create({
          data: {
            name: input.name,
            description: input.description,
            value: input.value,
            status: input.status,
          },
        });
        return {
          status: 201,
          message: "Products created successfully",
          result: products.id,
        };
      } catch (error) {
        return {
          status: 401,
          message: `${error}`,
        };
      }
    }),
});
