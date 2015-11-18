# Gridlex
## Just a Flexbox Grid System
v. 2.0.0

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
			<th>Grid class</th>
			<th>Column class</th>
	</tr>
	</thead>
	<tbody>
	<tr>
			<td><code>-</code></td>
			<td> Always </td>
			<td><code>.<b>grid</b>-*</code></td>
			<td><code>.<b>col</b>-*</code></td>
	</tr>
	<tr>
			<td><code>@media screen and (max-width: 35.5em)</code></td>
			<td>up to 568px</td>
			<td><code>.<b>grid-xs</b>-*</code></td>
			<td><code>.<b>col-xs</b>-*</code></td>
	</tr>
	<tr>
			<td><code>@media screen and (min-width: 35.5em) and (max-width: 48em)</code></td>
			<td>from 568px to 768px</td>
			<td><code>.<b>grid-sm</b>-*</code></td>
			<td><code>.<b>col-sm</b>-*</code></td>
	</tr>
	<tr>
			<td><code>@media screen and (min-width: 48em) and (max-width: 64em)</code></td>
			<td>from 768px to 1024px</td>
			<td><code>.<b>grid-md</b>-*</code></td>
			<td><code>.<b>col-md</b>-*</code></td>
	</tr>
	<tr>
			<td><code>@media screen and (min-width: 64em) and (max-width: 80em)</code></td>
			<td>from 1024px to 1280px</td>
			<td><code>.<b>grid-lg</b>-*</code></td>
			<td><code>.<b>col-lg</b>-*</code></td>
	</tr>
	<tr>
			<td><code>@media screen and (min-width: 80em)</code></td>
			<td>from 1280px</td>
			<td><code>.<b>grid-xl</b>-*</code></td>
			<td><code>.<b>col-xl</b>-*</code></td>
	</tr>
	</tbody>
</table>

## Install
### npm
npm i gridlex --save

### bower
bower install gridlex --save


See more : http://devlint.github.io/gridlex