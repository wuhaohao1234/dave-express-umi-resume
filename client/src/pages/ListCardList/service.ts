import request from 'umi-request';

export async function queryFakeList(params: { count: number }) {
  return request('/api/user_info/queryList', {
    method: 'post'
  });
}
