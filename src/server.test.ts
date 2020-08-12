import request from "supertest";
import server from './server';

describe('The root route', () => {
  test("[GET] /", async () => {
    const response = await request(server).get('/');
    expect(response.text).toBe('Hello');
  });
});
