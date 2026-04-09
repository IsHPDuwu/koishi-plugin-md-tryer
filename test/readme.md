## how to use
```bash
cd test
# uv is recommended:
# https://docs.astral.sh/uv/getting-started/installation/
# or install with gitee mirror
# https://gitee.com/wangnov/uv-custom/releases
uv venv
uv pip install Pillow
uv run python ./image_size_checker.py
# 然后直接粘贴图片url就可以啦！ 比如：
# https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f08202441b13595cfbfbedaa64aea3?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536
```