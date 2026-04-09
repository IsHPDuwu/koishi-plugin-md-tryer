## 🛠️ 如何使用

```bash
cd test
# 推荐使用 uv (更快更稳):
# https://docs.astral.sh/uv/getting-started/installation/
# 或者使用 gitee 镜像安装:
# https://gitee.com/wangnov/uv-custom/releases
uv venv
uv pip install Pillow
uv run python ./image_size_checker.py
# 然后直接粘贴图片 URL 就可以啦！比如：
# https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f08202441b13595cfbfbedaa64aea3?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536
```

## 📸 使用示例

![usage.example.png](usage.example.png)

> 💡 **提示**：工具会自动计算宽高比，并提供多种推荐尺寸（长边 30px/50px/80px/100px），方便你根据 QQ Markdown 的显示需求选择最合适的代码。