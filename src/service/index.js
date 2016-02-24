export function getColumns(type) {
  let columns = {
    forks: [
      {
        title: '用户名',
        dataIndex: 'owner',
        key: 'owner'
      },
      {
        title: '仓库地址',
        dataIndex: 'repo_url',
        key: 'repo_url'
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time'
      }
    ],
    pulls: [
      {
        title: '用户名',
        dataIndex: 'user',
        key: 'user'
      },
      {
        title: 'Pull Request 地址',
        dataIndex: 'pull_url',
        key: 'pull_url'
      },
      {
        title: '描述',
        dataIndex: 'body',
        key: 'body'
      }
    ]
  }
  return columns[type]
}
