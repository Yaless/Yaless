---
# 当前页面内容标题
title: Java源码-005-集合框架-02-Collection
# 当前页面图标
icon: java
# 分类
category:
  - Java
  - Collection
  - 集合
# 标签
tag:
  - Java
  - Collection
  - 集合
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

# Java源码-005-集合框架-02-Collection

## 概述

`Collection` 主要是定义集合通用操作的功能。

## `Collection`源码

```java
package java.util;

import java.util.function.Predicate;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

/**
 * 集合层次结构中的根接口，定义通用操作功能
 */
public interface Collection<E> extends Iterable<E> {

    /**
     * 返回此集合中的元素数。
	   * 如果元素数超过Integer.MAX_VALUE个元素，则返回Integer.MAX_VALUE 。
     */
    int size();

    /**
     * 如果此集合不包含元素，则返回 true 。
     */
    boolean isEmpty();

    /**
     * 如果此集合包含指定的元素，则返回true 。
	   * 当且仅当该集合至少包含一个元素e使得(o==null ? e==null : o.equals(e)) 。
     */
    boolean contains(Object o);

    /**
     * 返回此集合中的元素的迭代器
     */
    Iterator<E> iterator();

    /**
     * 返回一个包含此集合中所有元素的数组。
	   * 如果此集合对其迭代器返回的元素的顺序做出任何保证，则此方法必须以相同的顺序返回元素。
	   * 返回的数组将是"安全的"，调用者可以自由地修改返回的数组。因为该集合不保留对它的引用。
	   * （换句话说，这个方法必须分配一个新的数组，即使这个集合是由数组支持的）。
     */
    Object[] toArray();

    /**
	   * 返回包含此集合中所有元素的数组，返回的数组的运行时类型是指定数组的运行时类型。
	   * 如果集合适合指定的数组，则返回其中。 否则，将为指定数组的运行时类型和此集合的大小分配一个新数组。
     * ⚠️：toArray(new Object[0])的功能与toArray()相同 。
     */
    <T> T[] toArray(T[] a);

    /**
     * 添加
     */
    boolean add(E e);

    /**
     * 如果此集合包含这个元素就删除
     */
    boolean remove(Object o);

    /**
     * 如果此集合包含指定集合中的所有元素，则返回true。
     */
    boolean containsAll(Collection<?> c);

    /**
     * 将指定集合中的所有元素添加到此集合
     */
    boolean addAll(Collection<? extends E> c);

    /**
     * 删除指定集合中包含的所有此集合的元素
     */
    boolean removeAll(Collection<?> c);

    /**
     * 删除集合中满足传入条件的所有元素
     * @since 1.8
     */
    default boolean removeIf(Predicate<? super E> filter) {
        Objects.requireNonNull(filter);
        boolean removed = false;
        final Iterator<E> each = iterator();
        while (each.hasNext()) {
            if (filter.test(each.next())) {
                each.remove();
                removed = true;
            }
        }
        return removed;
    }

    /**
     * 仅保留此集合中包含在指定集合中的元素，交集
     */
    boolean retainAll(Collection<?> c);

    /**
     * 从此集合中删除所有元素
     */
    void clear();

    /**
     * 将指定的对象与此集合进行比较判断是否相等
     */
    boolean equals(Object o);

    /**
     * 返回此集合的哈希码值
     */
    int hashCode();

    /**
     * 创建一个Spliterator
     * @since 1.8
     */
    @Override
    default Spliterator<E> spliterator() {
        return Spliterators.spliterator(this, 0);
    }

    /**
     * 将集合作为源转化为Stream返回
     * @since 1.8
     */
    default Stream<E> stream() {
        return StreamSupport.stream(spliterator(), false);
    }

    /**
     * 将集合作为源转化为可能并行的Stream返回
     * @since 1.8
     */
    default Stream<E> parallelStream() {
        return StreamSupport.stream(spliterator(), true);
    }
}

```





