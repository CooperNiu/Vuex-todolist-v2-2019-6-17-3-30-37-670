# Vuex Todo List - v2

## 重构:

> 将目前所有数据存储都改为来自**state**的方式，所有的数据获取来源和修改来源都来自服务器端的API Call，当数据从API获取或者修改以后，再去调整**state**让UI render

**例如以下获取状态的todo list的API:**

```
http://5b4dcb2aec112500143a2311.mockapi.io/api/todos?search=active
```

**构建自己的Mcok API Server:**

## <https://www.mockapi.io/projects>

**课参考文档**：<https://www.mockapi.io/docs>

**访问HTTP API使用 npm库：** axios, 具体使用方法参考axios github文档

### 代码重构思路提示

todosAPI封装了对API的异步调用，仅仅在成功后通过回调通知，再回调中再调用dispath，例如：

```
apiUrl: 'http://5b4dcb2aec112500143a2311.mockapi.io/api';
  add(todo, successCallBack) {
    // this.todos.push(todo, successCallBack);
    axios
      .post(`${this.apiUrl}/todos`, {
        id: todo.viewId,
        content: todo.content,
        status: todo.status
      })
      .then(function(response) {
        console.log(response.data);
        successCallBack(
          new Todo(
            response.data.id,
            response.data.content,
            response.data.status
          )
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }
```

### 要求

- Git commit 小步提交
- 每次提交的评论都有意义

## 编程题答题流程

- 在命令行中使用以下命令在用户本地任意目录下clone此题目库

```
git clone repo_of_this_template
```

- 仔细阅读题目要求和题目描述（题目的README.md中），完成题目
- 在github上创建远端仓库(此处使用`your_remote_repo`代替你在github上创建的远端仓库)
- 设置远程仓库

```
git remote set-url origin your_remote_repo`
```

- 在本地使用**git提交(commit)**并**上传(push)**，之后将github仓库地址(your_remote_repo) eg:（[https://github.com/username/your_remote_repo）](https://github.com/username/your_remote_repo%EF%BC%89) 填入到提交地址一栏
- 获取分支（该题目分支填写master即可）
- 提交
- 等待结果
