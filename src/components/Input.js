import React from 'react'

export const Input = (props) => {

    let inputClassName = 'form-control'
    if (props.error !== undefined) {
        inputClassName += props.error ? ' is-invalid' : ' is-valid';
    }

    return (
        <div className={ props.col ? props.col + ' form-group': ' form-group' }>
            { props.label && <label>{props.label}</label>}
            <input
                className={inputClassName}
                type={props.type || 'text' }
                value={props.value || ''}
                placeholder= {props.placeholder}
                onChange = {props.onChange}
            />
            {props.error && (
                <span className="invalid-feedback">{props.error}</span>
            )}
        </div>
    );
}

export const Select = (props) => {

    let inputClassName = 'form-control';
    if (props.error !== undefined) {
        inputClassName += props.error ? ' is-invalid' : ' is-valid';
    }
    let options = props.options;

    return (
        <div className={ props.col ? props.col + ' form-group': ' form-group col-md-6 mb-2' }>
            { props.label && <label>{props.label}</label>}
            <select
                className={inputClassName}
                onChange = {props.onChange}
                id={props.id}
            >
                {options.map(function(name, index){
                    if(props.selected && props.selected === name.value) return <option key={ index } value={name.value} selected>{name.option}</option>;
                    else return <option key={ index } value={name.value} >{name.option}</option>;
                })}
            </select>
            {props.error && (
                <span className="invalid-feedback">{props.error}</span>
            )}
        </div>
    );
}

export const Textarea = (props) => {
    let inputClassName = 'form-control';
    if (props.error !== undefined) {
        inputClassName += props.error ? ' is-invalid' : ' is-valid';
    }

    return (
        <div className={ props.col ? props.col + ' form-group': ' form-group ' }>
            { props.label && <label>{props.label}</label>}
            <textarea
                placeholder= {props.placeholder}
                className= {inputClassName}
                onChange = {props.onChange}
                rows={props.rows? props.rows : '2'}
                value= {props.value}
            >
            </textarea>
            {props.error && (
                <span className="invalid-feedback">{props.error}</span>
            )}
        </div>
    );
}

