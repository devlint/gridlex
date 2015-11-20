# Gridlex
## Just a Flexbox Grid System
v. 2.0.1

The concept is simple: you need to wrap your `.col` in a `.grid`.

### What can we expect?
- Basically each column is the same width as every other cell in the grid.
- But you can add sizing classes to individual columns.
- For responsive designs, you can add classes based on media-queries.
- Top, bottom, or middle. For the grid. And for the columns.
- Grids can be nested. Always. Directly in a column.

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
Because of responsive, you need sometimes to change the size of columns: with this keys as classes you can control your layout by media-queries.
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
		<td><code>@media screen and (max-width: 35.5em)</code></td>
		<td>Max 568px</td>
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

## Install
### npm
npm install gridlex --save

### bower
bower install gridlex --save


See more : http://gridlex.devlint.fr