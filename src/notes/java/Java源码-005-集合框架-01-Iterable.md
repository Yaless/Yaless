---
# 当前页面内容标题
title: Java源码-005-集合框架-01-Iterable
# 当前页面图标
icon: java
# 分类
category:
  - Java
  - Iterable
  - 迭代器
# 标签
tag:
  - Java
  - Iterable
  - 迭代器
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

# Java源码-005-集合框架-01-Iterable

## `Iterable`概述

功能接口`Iterable`比较简单，主要是支持集合的增强迭代。

## `Iterable`源码

```java
/**
 * 实现此接口允许对象使用增强for循环
 * @since 1.5
 */
public interface Iterable<T> {
    /**
     * 返回一个Iterator
     * @return an Iterator.
     */
    Iterator<T> iterator();

    /**
     * 对Iterable的每个元素执行给定的操作，直到所有元素都被处理或动作引发异常。
     * @since 1.8
     */
    default void forEach(Consumer<? super T> action) {
        Objects.requireNonNull(action);
        for (T t : this) {
            action.accept(t);
        }
    }

    /**
     * 在Iterable描述的元素上创建一个Spliterator
     * @since 1.8
     */
    default Spliterator<T> spliterator() {
        return Spliterators.spliteratorUnknownSize(iterator(), 0);
    }
}

```



