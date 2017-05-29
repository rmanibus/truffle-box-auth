
// The Old way : how to render a button from semantic-ui in a reactRouter Link ? (wrapper) 
//Hopefully we won't need that in this project. TO DO: put in archive
class LinkButton extends Link {
  render() {
    const {
      to,
      children,
      ...rest
    } = this.props;
    return (<Button /*{...rest} */ onClick={this.handleClick} contrast>{children}</Button>);
  }
}
