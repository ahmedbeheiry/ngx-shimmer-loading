# Shimmer Loading for Angular 8+ Apps

Facebook shimmer loading effect for Angular 8+ apps. It's a fancy way to tell your users that there's something loading.

ngx-shimmer-loading is simple and easy to use. It also comes with the two directions

See [Demo](https://ngx-shimmer-loading.stackblitz.io/) page.

## Table of contents

  * [Features](#features)
  * [Getting started](#getting-started)
  * [API](#api)
  * [Contributing](#contributing)

## Features
- [x] Easy and simple to use.
- [x] Easy to setup.
- [x] No Dependencies.
- [x] Fancy Animations.

## Getting started

### Step 1: Install `ngx-shimmer-loading`:

#### NPM
```shell
npm i --save ngx-shimmer-loading
```
### Step 2: Import the NgxShimmerLoadingModule into your module:
```ts
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
@NgModule({
  ...
  imports: [ NgxShimmerLoadingModule ],
  ...
})
export class AppModule {}
```

### Step 3: Use the ngx-shimmer-loading component:
```html
<ngx-shimmer-loading></ngx-shimmer-loading>
```
You can customize it with different inputs - check [API](#api) for more details.
Example:
```html
<ngx-shimmer-loading [shape]="'square'" [width]="'70px'"></ngx-shimmer-loading>
```

## API
### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shape | `'circle'`  OR  `'square'`  OR  `'rect'` | `rect` | no | Set set shimmer shape. |
| width | `string` | `'80%'` | no | Set shimmer width. In case of shape is `'circle'` or `'square'` use width with `px` unit. |
| height | `string` | `'12px'` | no | Set shimmer height. In case of shape is `'circle'` or `'square'` shimmer height will `equal` shimmer width. |
| borderRadius | `string` | `'5px'` | no | Set shimmer border radius. In case of shape is `'circle'` borderRadius equals `'50%'` |
| direction | `'ltr'`  OR  `'rtl'` | `'ltr'` | no | Set shimmer direction. |


## Contributing

Contributions are welcome. You can start by looking at [issues](https://github.com/ahmedbeheiry/ngx-shimmer-loading/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) with label *Help wanted*  or creating new Issue with proposal or bug report.