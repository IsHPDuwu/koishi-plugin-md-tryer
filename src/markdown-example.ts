const example0 = `# 标题示例
# 一级标题
## 二级标题
### 三级标题
**粗体** 和 *斜体* 文本`

const example1 = `# 列表示例
## 无序列表
- 项目一
- 项目二
  - 子项目一
  - 子项目二

## 有序列表
1. 第一项
2. 第二项
3. 第三项`

const example2 = `# 文本格式示例
**粗体文本**
*斜体文本*
***粗斜体文本***

~~删除线文本~~

行内代码：\`console.log("Hello")\``

const example3 = `# 代码示例
行内代码：\`console.log("Hello")\`

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
hello();
\`\`\``

const example4 = `# 引用示例
> 这是一段引用
>> 嵌套引用
>>> 三级嵌套

> 引用中可以包含**粗体**和*斜体*`

const example5 = `# 表格示例
| 姓名 | 年龄 | 职业 |
|------|------|------|
| 张三 | 25   | 工程师 |
| 李四 | 30   | 设计师 |
| 王五 | 28   | 产品经理 |`

const example6 = `# 分割线和强调示例
---

**粗体文本**
*斜体文本*
***粗斜体文本***

---

~~删除线文本~~`

const example7 = `# 任务列表示例
- [x] 已完成的任务
- [ ] 未完成的任务
- [ ] 另一个待办事项

## 任务详情
- [x] 学习 Markdown
- [ ] 实践使用
- [ ] 分享给他人`

const example8 = `# 混合格式示例
## 介绍
这是一个**综合示例**，展示了多种格式的组合。

### 代码块
\`\`\`python
def greet(name):
    return f"Hello, {name}!"
\`\`\`

### 列表
- 特点一：简单易学
- 特点二：格式清晰
- 特点三：广泛支持`

const example9 = `# 高级示例
## 数学公式
行内公式：E = mc²

## 代码高亮
\`\`\`typescript
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 25 };
\`\`\`

## 引用与代码结合
> 这是一个代码示例：
> \`\`\`
> print("Hello")
> \`\`\``

const example10 = `# 单图示例（mihoyo）
> 原神？启动！！

![#100px #100px](https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f08202441b13595cfbfbedaa64aea3?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536)

--- 
图片url: \`https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f08202441b13595cfbfbedaa64aea3?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536\`
`

const example11 = `# 🔍 百度搜索示例

![#100px #71px](https://bkimg.cdn.bcebos.com/pic/b8014a90f603738da97755563251a751f81986184626?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536)

**百度**是中国最大的搜索引擎，提供网页、图片、视频等多种搜索服务。

## 访问方式
直接访问：www.baidu.com

或者使用完整链接：
https://www.baidu.com/

## 特色功能
-  智能搜索推荐
- 📰 实时新闻资讯
- 🗺️ 地图导航服务
- ☁️ 百度网盘集成

--- 
> 💡 提示：在 QQ Markdown 中，URL 以普通文本形式展示时不会被拦截`

const example12 = `# 🌐 Google 搜索示例

> ![#200px #108px](https://img0.baidu.com/it/u=2055861188,4286941637&fm=253&fmt=auto&app=138&f=JPEG?w=941&h=500)
> **Google**是全球领先的搜索引擎和技术公司，提供搜索、邮件、云存储等服务。

## 主要服务
| 服务名称 | Logo | 网址 | 说明 |
|---------|------|------|------|
| 搜索引擎 | ![#50px #50px](https://bkimg.cdn.bcebos.com/pic/4a36acaf2edda3cc7cd941d492b52e01213fb90e3488?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536) | www.google.com | 全球最大搜索引擎 |
| Gmail | ![#50px #50px](https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edda3cc81ffec5a16e93901213f35d8?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536) | mail.google.com | 电子邮件服务 |
| YouTube | ![#50px #50px](https://bkimg.cdn.bcebos.com/pic/7dd98d1001e93901213f2a69aabe43e736d12f2e3813?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536) | youtube.com | 视频分享平台 |
| Drive | ![#50px #28px](https://img2.baidu.com/it/u=2675505002,3411397645&fm=253&fmt=auto&app=120&f=PNG?w=889&h=500) | drive.google.com | 云存储服务 |

## 访问链接
https://www.google.com/`

const example13 = `# 📺 Bilibili 哔哩哔哩示例

## B站标志展示
| 类型 | Logo | 说明 |
|------|------|------|
| 文字Logo | ![#50px #43px](https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f305bd7f6c0be014c086f065be4?x-bce-process=image/format,f_auto/quality,Q_70/resize,m_lfit,limit_1,w_536) | 粉色"bilibili"文字标识 |
| 小电视 | ![#50px #50px](https://bkimg.cdn.bcebos.com/smart/bba1cd11728b4710b912e0014597d4fdfc03934585ff-bkimg-process,v_1,rw_252,rh_252,maxl_504?x-bce-process=image/format,f_auto) | 经典蓝色小电视图标 |

**Bilibili**（简称B站）是中国知名的弹幕视频网站，以ACG内容起家，现已发展为综合性视频社区。

## 平台特色
### 🎬 内容丰富
- 动画、漫画、游戏相关内容
- 知识科普类视频
- 生活娱乐内容
- 原创UP主作品

### 💬 弹幕文化
独特的实时评论系统，观众可以在视频播放时发送弹幕

### 🎮 互动性强
- 点赞、投币、收藏三连
- 评论区互动
- 直播打赏

## 官方网站
https://www.bilibili.com/

![#100px #56px](https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21b3d099d8cba6eddc450da92ff?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080)

---

## **命令行测试B站连通性示例用法：**
> (Powershell 或者 Bash)
\`\`\`bash
curl "https://www.bilibili.com/"
\`\`\`
`

const example14 = `# ▶️ YouTube 示例

## YouTube标志展示

### 平面Logo
![#100px #66px](https://img0.baidu.com/it/u=137596867,3116902675&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500)

> ↑ YouTube官方平面标识

**YouTube**是全球最大的视频分享平台，由Google拥有，提供海量视频内容。

## 平台亮点
### 🌍 全球化
- 支持多种语言
- 覆盖全球各地创作者
- 多地区内容推荐

### 📹 内容类型
1. **音乐MV** - 官方音乐频道
2. **教程教学** - 各类技能学习
3. **Vlog** - 个人生活记录
4. **游戏实况** - 游戏主播内容
5. **新闻时事** - 全球新闻报道

### 💰 创作者经济
- AdSense广告分成
- 会员订阅
- Super Chat打赏

## 访问地址
https://www.youtube.com/

> 📝 **Markdown 技巧**：在 QQ 原生 Markdown 中，建议将 URL 作为普通文本展示，避免使用标准链接语法触发白名单限制]

![#100px #56px](https://img2.baidu.com/it/u=686660673,2535615833&fm=253&fmt=auto&app=138&f=JPEG?w=570&h=321)

---

## **利用google封装的pypi api库 搜索youtube视频的示例：**
\`\`\`bash
# 推荐使用uv: https://docs.astral.sh/uv/getting-started/installation/#standalone-installer
# 或者国内镜像: https://gitee.com/wangnov/uv-custom/releases
uv venv
uv pip install google-api-python-client google-auth-oauthlib google-auth-httplib2
\`\`\`

\`\`\`python
from googleapiclient.discovery import build

# 替换为你自己的 API KEY
api_key = "YOUR_API_KEY"
youtube = build("youtube", "v3", developerKey=api_key)

# 示例：搜索视频
request = youtube.search().list(
    q="Rust programming",
    part="snippet",
    maxResults=5
)
response = request.execute()
print(response)
\`\`\`

`


const example15 = `# 🌟 原神？？启动！！！

![#100px #62px](https://img0.baidu.com/it/u=86700206,3834156575&fm=253&fmt=auto&app=120&f=PNG?w=800&h=500)

## 你说得对
> 你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人。

![#100px #70px](https://img0.baidu.com/it/u=1841932375,1102918939&fm=253&fmt=auto&app=138&f=JPEG?w=707&h=500)

## "一个不玩原神的人，无非只有两种可能性..."
> 一种是没有能力玩原神。因为买不起高配的手机和抽不起卡等各种自身因素，他的人生都是失败的，第二种可能：有能力却不玩原神的人，在有能力而没有玩原神的想法时，那么这个人的思想境界便低到了一个令人发指的程度。一个有能力的人不付出行动来证明自己，只能证明此人行为素质修养之低下。是灰暗的，是不被真正的社会认可的。 原神怎么你了，我现在每天玩原神都能赚150原石，每个月差不多5000原石的收入，也就是现实生活中每个月5000美元的收入水平，换算过来最少也30000人民币，虽然我只有14岁，但是已经超越了中国绝大多数人(包括你)的水平，这便是原神给我的骄傲的资本。这恰好说明了原神这个IP在线下使玩家体现出来的团结和凝聚力，以及非比寻常的脑洞，这种氛围在如今已经变质的漫展上是难能可贵的，这也造就了原神和玩家间互帮互助的局面，原神负责输出优质内容，玩家自发线下宣传和构思创意脑洞整活，如此良好的游戏发展生态可以说让其他厂商艳羡不已。玩游戏不玩原神，就像四大名著不看红楼梦，说明这人文学造诣和自我修养不足，他理解不了这种内在的阳春白雪的高雅艺术.，他只能看到外表的辞藻堆砌，参不透其中深奥的精神内核,只能度过一个相对失败的人生

![#76px #100px](https://img2.baidu.com/it/u=793102929,2899642027&fm=253&fmt=auto?w=800&h=1057)

## 最会串的一集

> 毫不夸张地说，《原神》是 miHoYo 迄今为止规模最为宏大，也是最具野心的一部作品。即便在经历了 8700 个小时的艰苦战斗后，游戏还有许多尚未发现的秘密，错过的武器与装备，以及从未使用过的法术和技能。

> 尽管游戏中的战斗体验和我们之前在烧机系列游戏所见到的没有多大差别，但游戏中各类精心设计的敌人以及 Boss 战已然将战斗抬高到了一个全新的水平。就和几年前的《塞尔达传说》一样，《原神》也是一款能够推动同类游戏向前发展的优秀作品。

![#100px #62px](https://img2.baidu.com/it/u=3993294206,1341497940&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500)

## 最有文化的一集
> 适可而止矣？夫原神者，乃国产之光，米哈游者，原神之宗首也。辱我原神及米哈游者，皆腾刺舟师。哈游欲兴文繁于全世，劳费心力，使腾食不惧，腾刺舟师辱之游，不能禁哈步，汝曹腾食水军之谋必败矣！`



export const examples: string[] = [
  example0,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
  example12,
  example13,
  example14,
  example15
]
