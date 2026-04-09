#!/usr/bin/env python3
"""
QQ Markdown 图片尺寸检查工具
输入图片URL，输出图片的长宽和比例，方便设置 QQ Markdown 的图片尺寸
"""

import urllib.request
import io
import sys
from PIL import Image


# ANSI 颜色代码
class Colors:
    RESET = '\033[0m'
    BOLD = '\033[1m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    MAGENTA = '\033[95m'
    CYAN = '\033[96m'
    RED = '\033[91m'


def print_color(text, color, end='\n'):
    """打印带颜色的文本"""
    print(f"{color}{text}{Colors.RESET}", end=end)


def get_image_dimensions(url: str) -> tuple[int, int] | None:
    """
    从URL获取图片并返回其尺寸 (width, height)
    
    Args:
        url: 图片URL
        
    Returns:
        tuple: (width, height) 或 None（如果失败）
    """
    try:
        # 下载图片
        print_color(f"正在下载图片: {url}", Colors.CYAN)
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        req = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(req, timeout=10) as response:
            image_data = response.read()
        
        # 打开图片获取尺寸
        image = Image.open(io.BytesIO(image_data))
        width, height = image.size
        
        return width, height
        
    except Exception as e:
        print_color(f"❌ 错误: {e}", Colors.RED)
        return None


def calculate_qq_markdown_size(width: int, height: int, max_long_side: int = 50) -> tuple[int, int]:
    """
    根据原始尺寸计算适合 QQ Markdown 的尺寸
    
    Args:
        width: 原始宽度
        height: 原始高度
        max_long_side: 长边的最大像素数（默认50）
        
    Returns:
        tuple: (qq_width, qq_height) 适合填入 ![#Wpx #Hpx] 的值
    """
    if width >= height:
        # 横向图片
        new_width = max_long_side
        new_height = round(height * (max_long_side / width))
    else:
        # 纵向图片
        new_height = max_long_side
        new_width = round(width * (max_long_side / height))
    
    return new_width, new_height


def main():
    print_color("=" * 60, Colors.BOLD + Colors.BLUE)
    print_color("🖼️  QQ Markdown 图片尺寸检查工具", Colors.BOLD + Colors.MAGENTA)
    print_color("=" * 60, Colors.BOLD + Colors.BLUE)
    print()
    print_color("使用说明:", Colors.YELLOW)
    print("- 输入图片URL（支持直接访问的图片链接）")
    print("- 程序会自动计算适合的 QQ Markdown 尺寸")
    print_color("- 按 Ctrl+C 或输入 'quit'/'exit' 退出\n", Colors.GREEN)
    
    try:
        while True:
            url = input(f"{Colors.CYAN}请输入图片URL: {Colors.RESET}").strip()
            
            if url.lower() in ['quit', 'exit', 'q']:
                print()
                print_color("\n👋 再见! 感谢使用~", Colors.GREEN + Colors.BOLD)
                break
            
            if not url:
                print_color("⚠️  URL不能为空，请重新输入\n", Colors.YELLOW)
                continue
            
            # 获取图片尺寸
            dimensions = get_image_dimensions(url)
            
            if dimensions is None:
                print_color("❌ 无法获取图片尺寸，请检查URL是否正确\n", Colors.RED)
                continue
            
            width, height = dimensions
            
            # 计算基本信息
            aspect_ratio = width / height if height > 0 else 0
            
            print()
            print_color(f"{'=' * 60}", Colors.BOLD + Colors.BLUE)
            print_color(f"📊 图片信息:", Colors.BOLD + Colors.MAGENTA)
            print(f"  • 原始尺寸: {width} × {height} px")
            orientation = '横向' if width >= height else '纵向'
            print(f"  • 宽高比:   {aspect_ratio:.2f}:1 ({orientation})")
            
            # 计算不同长边尺寸的推荐值
            print()
            print_color(f" QQ Markdown 推荐尺寸 (![#Wpx #Hpx]):", Colors.BOLD + Colors.GREEN)
            
            for max_side in [30, 50, 80, 100]:
                qq_w, qq_h = calculate_qq_markdown_size(width, height, max_side)
                print(f"  • 长边{max_side}px: ![{qq_w}px #{qq_h}px]")
            
            # 生成可直接复制的代码
            qq_w_50, qq_h_50 = calculate_qq_markdown_size(width, height, 50)
            print()
            print_color(f"📋 可直接复制的代码 (长边50px):", Colors.BOLD + Colors.YELLOW)
            print(f"  ![#{qq_w_50}px #{qq_h_50}px]({url})")
            
            print_color(f"{'=' * 60}\n", Colors.BOLD + Colors.BLUE)
            
    except KeyboardInterrupt:
        print()
        print()
        print_color("\n👋 检测到 Ctrl+C，优雅退出中...", Colors.GREEN + Colors.BOLD)
        print_color("感谢使用！再见~ ✨\n", Colors.GREEN)
        sys.exit(0)


if __name__ == "__main__":
    main()
