import React from 'react'

export const Input = (props) => {

    let inputClassName = 'form-control'

    return (
        <div className={ props.col ? props.col + ' form-group': ' form-group col-md-6 mb-2' }>
            { props.label && <label>{props.label}</label>}
            <input
                className={inputClassName}
                type={props.type || 'text' }
                placeholder= {props.placeholder}
                onChange = {props.onChange}
            />
            {props.hasError && (
                <span className="invalid-feedback">{props.hasError}</span>
            )}
        </div>
    );
}

export const Select = (props) => {

    let inputClassName = 'form-control'
    let options = props.options

    return (
        <div className={ props.col ? props.col + ' form-group': ' form-group col-md-6 mb-2' }>
            { props.label && <label>{props.label}</label>}
            <select
                className={inputClassName}
                onChange = {props.onChange}
            >
                {options.map(function(name, index){
                    return <option key={ index } value={name.value}>{name.option}</option>;
                })}
            </select>
        </div>
    );
}

export const Textarea = (props) => {

    return (
        <div className={ props.col ? props.col + ' form-group': ' form-group col-md-6 mb-2' }>
            { props.label && <label>{props.label}</label>}
            <textarea
                className='form-control'
                onChange = {props.onChange}
                rows='4'
            >
            </textarea>
        </div>
    );
}

