class MinimumValueValidator {
    message = "Acest câmp nu depăşeşte valoarea minimă: ";
    validate(component) {
        this.message += component.props.min + ".";
        return parseInt(component.state.value, 10) >= component.props.min;
    }
}

export default MinimumValueValidator;