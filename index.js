// ReactDOM.render(<h1>Hello!</h1>, document.getElementById('app'))
// render - повертає тільки один батьківський тег

// ReactDOM.render(<div><h1>Hello!</h1><h2>World!</h2></div>, document.getElementById('app'))
// в тегу-контейнері можна вставляти інші теги

ReactDOM.render(
  React.createElement('input', {
    placeholder: 'Help text',
    onClick: () => console.log('clicked'),
    onMouseEnter: () => console.log('Mouse Over'),
  }),
  document.getElementById('app')
)
