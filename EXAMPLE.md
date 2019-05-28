# Example Core Component - View

`Views` are the most basic building block of React Native apps, much like how divs are the most basic building block of websites. In terms of implementation, `View` is an abstraction layer on top of the target platform's native equivalent, whether that's `UIView`, `android.view`, `<div>`, or something else.

Views are primarily used for styling and layout of children elements. Let's look at a few of the styles we can apply to views. The example below contains two Views: the outer view which specifies the alignment of the content contained within, and the inner view which draws a blue square.
