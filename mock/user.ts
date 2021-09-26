export default [
  {
    url: '/api/users',
    method: 'get',
    response: ({body}: {body: any}) => {
      console.log('body------', body)
      return {
        code: 0,
        message: 'ok',
        data: {
          name: 'me',
          id: 1
        }
      }
    }
  }
];
