import styled from 'styled-components';
import React from 'react';
import defaultUser from './../../assets/img/users/default.jpg';

import { useState } from 'react';
const StyledSetting = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 7rem 0;

    .user-view__form-container {
        max-width: 68rem;
        margin: 0 auto;
        padding: 0 8rem;
    }
    .form__input {
        display: block;
        font-family: inherit;
        font-size: 1.5rem;
        color: inherit;
        padding: 1.25rem 1.75rem;
        border: none;
        width: 100%;
        background-color: #fff;
        background-color: #f2f2f2;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /* Pseudo element (a visible thing that isn't really in the DOM).
      Also needs -ms- */
    }
    .form__input:focus {
        outline: none;
        border-bottom: 3px solid #55c57a;
    }
    .form__input:focus:invalid {
        border-bottom: 3px solid #ff7730;
    }
    .form__input::-webkit-input-placeholder {
        color: #bbb;
    }

    .form__group:not(:last-child) {
        margin-bottom: 2.5rem;
    }

    .form__label {
        display: block;
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }
    .form__group:not(:last-child) {
        margin-bottom: 2.5rem;
    }

    .form__photo-upload {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.6rem;
    }

    .form__user-photo {
        height: 7.5rem;
        width: 7.5rem;
        border-radius: 50%;
        margin-right: 2rem;
    }

    .form__upload {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .form__upload:focus + label {
        outline: 3px solid #55c57a;
        outline-offset: 3px;
    }

    .form__upload + label {
        color: #55c57a;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid #55c57a;
        padding: 3px;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        cursor: pointer;
    }
    .form__upload + label:hover {
        background-color: #55c57a;
        color: #fff;
        -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    .right {
        text-align: right !important;
    }

    .line {
        margin: 6rem 0;
        width: 100%;
        height: 1px;
        background-color: #e0e0e0;
    }
`;

const Setting = ({ data }) => {
    const [name, setName] = useState('boyan');
    const [passwords, setpasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangePassword = (e, name) => {
        const temp = { ...passwords };
        temp[name] = e.target.value;
        setpasswords(temp);
    };

    return (
        <StyledSetting>
            <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">
                    Your account settings
                </h2>

                <form className="form form-user-data">
                    <div className="form__group">
                        <label className="form__label" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="form__input"
                            id="name"
                            type="text"
                            value={name}
                            required=""
                            name="name"
                            onChange={onChangeName}
                        />
                    </div>
                    <div className="form__group ma-bt-md">
                        <label className="form__label" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="form__input"
                            id="email"
                            type="email"
                            value="boyanliu@gmail.com"
                            required=""
                            name="email"
                            readOnly={true}
                        />
                    </div>
                    <div className="form__group form__photo-upload">
                        <img
                            className="form__user-photo"
                            src={defaultUser}
                            alt="User"
                        />
                        <input
                            className="form__upload"
                            type="file"
                            accept="image/*"
                            id="photo"
                            name="photo"
                        />
                        <label htmlFor="photo">Choose new photo</label>
                    </div>
                    <div className="form__group right">
                        <button className="btn btn--small btn--green">
                            Save settings
                        </button>
                    </div>
                </form>
            </div>
            <div className="line">&nbsp;</div>

            <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">Password change</h2>
                <form className="form form-user-password">
                    <div className="form__group">
                        <label
                            className="form__label"
                            htmlFor="password-current">
                            Current password
                        </label>
                        <input
                            className="form__input"
                            id="password-current"
                            type="password"
                            placeholder="••••••••"
                            required=""
                            minLength="8"
                            value={passwords.currentPassword}
                            onChange={(e) =>
                                onChangePassword(e, 'currentPassword')
                            }
                        />
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="password">
                            New password
                        </label>
                        <input
                            className="form__input"
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required=""
                            minLength="8"
                            value={passwords.newPassword}
                            onChange={(e) => onChangePassword(e, 'newPassword')}
                        />
                    </div>
                    <div className="form__group ma-bt-lg">
                        <label
                            className="form__label"
                            htmlFor="password-confirm">
                            Confirm password
                        </label>
                        <input
                            className="form__input"
                            id="password-confirm"
                            type="password"
                            placeholder="••••••••"
                            required=""
                            minLength="8"
                            value={passwords.confirmPassword}
                            onChange={(e) =>
                                onChangePassword(e, 'confirmPassword')
                            }
                        />
                    </div>
                    <div className="form__group right">
                        <button className="btn btn--small btn--green btn--save-password">
                            Save password
                        </button>
                    </div>
                </form>
            </div>
        </StyledSetting>
    );
};

export default Setting;
