/*!
 * Copyright (c) 2012 Ben Olson (https://github.com/bseth99/jquery-ui-extensions)
 * jQuery UI LabeledSlider @VERSION
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 *  jquery.ui.slider.js
 */


/*!
 * Author: Prabin Manandhar
 */

(function ($, window, document, undefined) {

	/* Extending jQuery ui slider widget for date*/
	$.widget("BI-Widgets.dateSlider", $.ui.slider, {
		options: {
			tickInterval: 1, // Month
			tickLabelFormat: 'M Y',
			step: 86400,
		},

		uiDateSlider: null,

		_create: function () {
			this._detectOrientation();
			this.uiDateSlider = this.element.wrap('<div class="ui-slider-wrapper ui-widget"></div>')
				.before('<div class="ui-slider-labels"></div>')
				.parent()
				.addClass(this.orientation)
				.css('font-size', this.element.css('font-size'));

			this.element.removeClass('ui-widget');
			this._super();

			this._render();
			that = this;
			$(window).resize(function () {
				that._render();
			});
		},
		_render: function () {
			this._alignWithStep();

			if (this.orientation == 'horizontal') {
				this.uiDateSlider
					// .width(this.element.css('width'));
					.width('100%');

			} else {
				this.uiDateSlider
					.height(this.element.css('height'));
			}

			this._drawLabels();
		},

		_drawLabels: function () {

			var labels = {},
				$lbl = this.uiDateSlider.children('.ui-slider-labels'),
				dir = this.orientation == 'horizontal' ? 'left' : 'bottom',
				minDate = new Date(this.options.min),
				maxDate = new Date(this.options.max),
				inr = this.options.tickInterval,
				tickArray = this.options.tickArray,
				label,
				pt;

			// console.log(this._monthDiff(minDate, maxDate));
			// console.log(this.options.tickInterval);
			// console.log(this.options.tickLabelFormat);

			var lblWidth = this._tickLabelWidth($lbl, minDate.format(this.options.tickLabelFormat));

			// console.log('lblWidth ', lblWidth);

			// console.log('this.element.innerWidth(): ', this.element.innerWidth());

			var months = this._monthDiff(minDate, maxDate);
			var cnt = Math.floor(this.element.innerWidth() / (lblWidth + 25));
			cnt = months <= cnt ? months : cnt;
			inr = Math.ceil(months / cnt);
			cnt = Math.ceil(months / inr);

			var totalDays = this._dayDiff(minDate, maxDate);

			//console.log(this._monthDiff(minDate, maxDate));
			$lbl.html('');

			dt = new Date(minDate);
			for (i = 0; i <= cnt; i++) {
				dt.setMonth(dt.getMonth() + (i == 0 ? 0 : inr));
				label = dt > maxDate ? '' : dt.format(this.options.tickLabelFormat);

				if (label !== '') {
					$('<div>').addClass('ui-slider-label-ticks')
						.css(dir, (Math.round((this._dayDiff(minDate, dt) / totalDays) * 10000) / 100) + '%')
						.html('<span>' + (label) + '</span>')
						.appendTo($lbl);
				}


			}

		},
		_tickLabelWidth: function ($lbl, text) {
			$lbl.html('<div class="ui-slider-label-ticks"><span>' + text + '</span></div>');
			var lblWidth = $('.ui-slider-label-ticks span').innerWidth();
			$lbl.html('');
			return lblWidth;
		},

		_monthDiff: function (d1, d2) {
			d1 = new Date(d1);
			d2 = new Date(d2);
			var months;
			months = (d2.getFullYear() - d1.getFullYear()) * 12;
			months -= d1.getMonth() + 1;
			months += d2.getMonth() + 1;
			return months <= 0 ? 0 : months;
		},
		_dayDiff: function (d1, d2) {
			d1 = new Date(d1);
			d2 = new Date(d2);
			var days;
			days = Math.round((d2.getTime() - d1.getTime()) / this.options.step);
			// console.log(d1);
			// console.log(d2);
			// console.log(days);
			return days;
		},

		_setOption: function (key, value) {

			this._super(key, value);

			switch (key) {

				case 'tickInterval':
				case 'tickLabels':
				case 'min':
				case 'max':
				case 'step':
					this._alignWithStep();
					this._drawLabels();
					break;

				case 'orientation':

					this.element
						.removeClass('horizontal vertical')
						.addClass(this.orientation);

					this._drawLabels();
					break;
			}
		},

		_alignWithStep: function () {
			if (this.options.tickInterval < this.options.step)
				this.tickInterval = this.options.step;
			else
				this.tickInterval = this.options.tickInterval;
		},

		_destroy: function () {
			this._super();
			this.uiDateSlider.replaceWith(this.element);
		},

		widget: function () {
			return this.uiDateSlider;
		}

	});

})(jQuery, window, document);
