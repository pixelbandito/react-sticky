import React from 'react';

class ExampleStuckContent extends React.Component {
  render() {
    const { children, modifiers } = this.props;

    const modifierClasses = modifiers.length ? modifiers.reduce((result, modifier) => {
      result = `${result} ${ExampleStuckContent.baseClass}--${modifier}`;
      return result;
    }, '') : '';

    return (
      <div className={`${ExampleStuckContent.baseClass} ${modifierClasses}`}>
        {children}
        {!!modifiers.length &&
          <div className={`${ExampleStuckContent.baseClass}__label`}>
            {modifiers.map(modifier => (<span key={modifier}>{modifier}</span>))}
          </div>
        }
      </div>
    );
  }
}

ExampleStuckContent.baseClass = 'ExampleStuckContent';

export default ExampleStuckContent;
