# introduce

nz_ui_enter is a FiveM script for a simple input box

- Support callback return
- Does not rely on any framework, runs alone
- Average 0.01ms, optimized

![输入图片说明](https://images.gitee.com/uploads/images/2021/1127/234014_5d394003_2033456.png "QQ截图20211127234002.png")


#### Installation tutorial

1. Put **nz_ui_enter** into the **resources** folder
2. Add a line `ensure nz_ui_enter` to server.cfg
3. Start the server

#### Instructions for use


####      Only supports client calls, does not support server calls

```
     TriggerEvent('nz_ui_enter','Menu Title', function(data)
         print(data) - the returned content of the callback
     end)
```


Note: It is written on the open source template provided by **Bootstrap**, the UI is not designed by myself
