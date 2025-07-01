# 📸 如何添加照片到生日网站

## 🎯 快速解决方案

### 方法一：直接添加您的照片（推荐）

1. **准备照片文件**
   - 将您想要展示的照片重命名为：`photo1.jpg`, `photo2.jpg`, `photo3.jpg` ... `photo15.jpg`
   - 建议照片尺寸：800x800像素或更大
   - 支持格式：JPG, PNG, WebP

2. **复制到正确位置**
   ```
   将照片文件复制到：
   项目文件夹/public/images/
   
   最终结构应该是：
   public/images/photo1.jpg  ← 您的第一张照片
   public/images/photo2.jpg  ← 您的第二张照片
   ...
   ```

3. **刷新网页**
   - 保存文件后刷新浏览器页面 (http://localhost:3001)
   - 照片应该立即显示

### 方法二：使用拖拽方式

1. 打开项目文件夹
2. 找到 `public/images/` 文件夹
3. 直接将您的照片拖拽到这个文件夹中
4. 将照片重命名为 `photo1.jpg`, `photo2.jpg` 等

## 🖼️ 照片建议

### 照片内容对应（根据您提供的照片）：
- `photo1.jpg` - 与家人的温馨时光（中国传统建筑前）
- `photo2.jpg` - 在巴黎卢浮宫
- `photo3.jpg` - 传统汉服照  
- `photo4.jpg` - 在卢浮宫内（维纳斯雕像前）
- `photo5.jpg` - 卢浮宫楼梯
- `photo6.jpg` - 与家人登山
- `photo7.jpg` - 蒙娜丽莎展厅
- `photo8.jpg` - 巴黎街头
- `photo9.jpg` - 伦敦眼
- `photo10.jpg` - 温泉度假
- `photo11.jpg` - 悉尼海港
- `photo12.jpg` - 情侣照
- `photo13.jpg` - 阿姆斯特丹
- `photo14.jpg` - 爱丁堡
- `photo15.jpg` - 传统汉服

### 照片质量要求：
- **清晰度**：高清照片效果最佳
- **尺寸**：建议至少800x800像素（正方形最佳）
- **文件大小**：每张不超过2MB
- **格式**：JPG格式推荐（PNG和WebP也支持）

## 🔧 故障排除

### 照片不显示的常见原因：

1. **文件名不正确**
   ✅ 正确：`photo1.jpg`
   ❌ 错误：`Photo1.JPG`, `photo1.jpeg`, `照片1.jpg`

2. **文件路径不正确**
   ✅ 正确：`public/images/photo1.jpg`
   ❌ 错误：`images/photo1.jpg`, `public/photo1.jpg`

3. **文件格式问题**
   - 确保是真正的图片文件
   - 避免使用.heic或其他不常见格式

4. **浏览器缓存**
   - 按 Ctrl+F5 (Windows) 或 Cmd+Shift+R (Mac) 强制刷新
   - 或者打开开发者工具，右键刷新按钮选择"空缓存并硬性重新加载"

## 🎨 自定义照片描述

如果您想修改照片的描述文字，编辑 `src/app/page.tsx` 文件中的 `photos` 数组：

```typescript
{
  id: 1,
  src: '/images/photo1.jpg',
  alt: '您的照片描述',
  description: '显示在照片下方的文字',
  location: '拍摄地点'
}
```

## 📞 需要帮助？

如果照片仍然无法显示，请检查：
1. 文件确实存在于 `public/images/` 文件夹中
2. 文件名拼写完全正确（区分大小写）
3. 照片文件没有损坏
4. 浏览器已经刷新

---

**现在就试试添加您的第一张照片吧！** 🎉 