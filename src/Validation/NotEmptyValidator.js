class NotEmptyValidator {
    message = "Acest câmp nu poate fi gol.";
    validate(component) {
        return (component.state.value || "" || undefined || null) !== null;
    }
}

export default NotEmptyValidator;