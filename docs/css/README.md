---
pageClass: custom-page-class
---
# 居中方式


### 总结在前，代码在后

文章讲解了水平居中、垂直居中和居中布局解决方案，其实不难发现，在所有这些解决方案里面，都是利用了CSS里面的属性和特性来帮我们解决问题，所以如果想要解决一些复杂的布局方案或者其他CSS问题，前提就是对CSS里面所有的属性要有所了解，这样才能做出解决方案来，而不是每次想要解决问题的时候，都是去网上搜索一下。



###  水平居中

**解决方案之一：inline-block+text-align**

```css
display: inline-block;
text-align: center;
```

**解决方案之二：table+margin**

```css
display: table;
margin:0 auto;
```
**解决方案之三：absolute+transform**

```css
/*放在父元素上*/
position: relative;
/*放在子元素上*/
position: absolute;
left: 50%;
transform: translateX(-50%);
```

**解决方案之四：flex+justify-content**

```css
display: flex;
justify-content: center;
```


### 垂直居中

**解决方案之一：table-cell+vertical-align**

```css
/*放在父元素下*/
display: table-cell;
vertical-align: middle;
```

**解决方案之二：absolute+transform**

```css
/*放在父元素上*/
position: relative;
/*放在子元素上*/
position: absolute;
top: 50%;
transform: translateY(-50%);
```

**解决方案之三：flex+align-items**

```css
display: flex;
align-items: center;
```


### 居中布局


**解决方案之一：inline-block+text-align+table-cell+vertical-align**

```css
/*组合解决，先水平后垂直*/

/*放在父元素上*/
display: table-cell;
vertical-align: middle;
text-align: center;

/*放在子元素上*/
display: inline-block;
``` 

**解决方案之二：absolute+transform**

```css
/*放在父元素上*/
position: relative;

/*放在子元素上*/
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
``` 

**解决方案之三：flex+justify-content+align-items**

```css
/*放在父元素上*/
display: flex;
justify-content: center;
align-items: center;
``` 
<!-- more -->
