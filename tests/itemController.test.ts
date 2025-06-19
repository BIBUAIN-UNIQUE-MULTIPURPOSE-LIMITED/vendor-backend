import { Request, Response } from 'express';
import { getItems } from '../src/controllers/itemController';
import prisma from '../src/config/database';

jest.mock('../src/config/database', () => ({
  item: {
    findMany: jest.fn(() => Promise.resolve([])),
  },
}));

describe('Item Controller', () => {
  it('should return an empty array when no items exist', async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    // Mock the findMany method to return an empty array
    (prisma.item.findMany as jest.Mock).mockResolvedValue([]);

    await getItems(req, res, next);

    expect(res.json).toHaveBeenCalledWith([]);
  });
});
