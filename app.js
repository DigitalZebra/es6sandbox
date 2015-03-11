import * as maths from './maths';

// module
console.log('pow: ' + maths.pow(2, 3));
console.log('sqrt: ' + maths.sqrt(4));
console.log('square: ' + maths.square(4));


// arrow operator
var test = [5, 6, 7, 8];

test.forEach(v => {
	console.log(v);
});


// classes
class Model {
  constructor(properties) {
    this.properties = properties;
  }

  toObject() {
    return this.properties;
  }
}

class View {
  constructor(options) {
    this.model = options.model;
    this.template = options.template;
  }

  render() {
    return JSON.stringify(this.model.toObject());
  }
}

class LogView extends View {
  render() {
    return `name: ${ this.model.properties.name }`;
  }
}

var test = new Model({
	name: 'drew'
});

var view = new LogView({
	model: test,
	template: 'doesnt matter'
});

console.log(view.render());

