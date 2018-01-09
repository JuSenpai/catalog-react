class RegexValidator {
    message = "Acest câmp nu este valid.";
    validate(component) {
        let regex = component.props.pattern;
        return regex.test(component.state.value);
    }
}

export default RegexValidator;