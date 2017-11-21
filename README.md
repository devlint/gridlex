# Gridlex
## Just a Flexbox Grid System

[![Join the chat at https://gitter.im/devlint/gridlex](https://badges.gitter.im/devlint/gridlex.svg)](https://gitter.im/devlint/gridlex?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
v. 2.6.1


Based on Flexbox (CSS Flexible Box Layout Module), Gridlex is a very simple css grid system to quickly create modern layouts and submodules.

The concept is simple: you need to wrap your `.col` in a `.grid`.

### What can we expect?
- Basically each column is the same width as every other cell in the grid.
- But you can add sizing classes to individual columns.
- For responsive designs, you can add classes based on media-queries.
- Top, bottom, or middle. For the grid. And for the columns.
- Grids can be nested. Always. Directly in a column.

### Sass, CSS?

**I just wanna use it in my page!**

To use Gridlex out of the box, call the gridlex.min.css file in your project :

Via cdnjs:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.6.1/gridlex.min.css">
```

**I want to include it in my source files!**

Just include gridlex/src/gridlex.less or gridlex/src/gridlex.scss 
and 
update the $gl- vars:
<table>
    <thead>
    <tr>
        <th>Variable names</th>
        <th>Default value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>$gl-gridName:</code></td>
        <td><code>grid</code></td>
    </tr>
    <tr>
        <td><code>$gl-colName:</code></td>
        <td><code>col</code></td>
    </tr>
    <tr>
        <td><code>$gl-attributeName:</code></td>
        <td><code>class</code></td>
    </tr>
    <tr>
        <td><code>$gl-gutter:</code></td>
        <td><code>1rem</code></td>
    </tr>
    <tr>
        <td><code>$gl-gutter-vertical:</code></td>
        <td><code>1rem</code></td>
    </tr>
    <tr>
        <td><code>$gl-mq-width:</code></td>
        <td><code>'max-width'</code></td>
    </tr>
    <tr>
        <td><code>$gl-mq-list:</code></td>
        <td><pre><code>(
         lg: 80em, // max 1280px
         md: 64em, // max 1024px
         sm: 48em, // max 768px
         xs: 36em // up to 576px
 )</code></pre></td>
    </tr>
    </tbody>
</table>

### Install via Npm
npm install gridlex --save

### Install via Bower
bower install gridlex --save


### 3 ways to use Gridlex
**1- The basic. Just add a class `.grid-*` (from -1 to -12)**
```html
<div class="grid-1">
	<div class="col">...</div>
</div>
```

**2- The precise. Compose cell by cell (with class like `.col-*`)**
```html
<div class="grid">
	<div class="col-12">...</div>
</div>
```

**3- The automatic. Just add number of cells you want in the grid (`.grid > .col`)**
```html
<div class="grid">
		<div class="col">...</div>
		<div class="col">...</div>
</div>
```

### Gridlex and media-queries
Because of responsive, you sometimes need to change the size of columns: with this keys as classes you can control your layout by media-queries.

Columns can be hidden at breakpoints using `_*-0` (e.g. `col-4_md-6_sm-0`)
<table>
<thead>
	<tr>
		<th>CSS Media Query</th>
		<th>Applies</th>
		<th>Usage</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><code>@media screen and (max-width: 36rem)</code></td>
		<td>Max 576px</td>
		<td><code><b>_xs</b>-*</code></td>
	</tr>
	<tr>
		<td><code>@media screen and (max-width: 48em)</code></td>
		<td>Max 768px</td>
		<td><code><b>_sm</b>-*</code></td>
	</tr>
	<tr>
		<td><code>@media screen and (max-width: 64em)</code></td>
		<td>Max 1024px</td>
		<td><code><b>_md</b>-*</code></td>
	</tr>
	<tr>
		<td><code>@media screen and (max-width: 80em)</code></td>
		<td>Max 1280px</td>
		<td><code><b>_lg</b>-*</code></td>
	</tr>
</tbody>
</table>

See more : http://gridlex.devlint.fr
