import {CarItem} from "./carItem/CarItem";
import {useState, useEffect} from "react";
import * as CarService from '../../services/CarService'
import {CarDetails} from "./carDetails/CarDetails";
import {CarEdit} from "./carEdit/CarEdit";
import {carActions} from './carSectionsConstants';
import {CarDelete} from "./carDelete/CarDelete";
import {CarCreate} from "./carCreate/CarCreate";

export const CarsSection = (props) => {


    const[cars, setCars] = useState([]);
    const[carAction, setCarAction] = useState({car: null, action: null});

    useEffect(() => {
        CarService.getAll().then(result => setCars(result));
    }, []);


    const carActionClickHandler = (id, actionType) => {
        if(id === null) setCarAction({car:null, action:actionType});
        else{
            CarService.getSingle(id)
            .then(car => setCarAction({car: car, action: actionType}));
        }
    };

    const CloseClickHandler = () => {
        setCarAction({car: null, action: null});
    }

    const carCreateHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const newCar = Object.fromEntries(data);

        CarService.create(newCar)
            .then(() => {
                CloseClickHandler();
                setCars(state => [...state, newCar]);
            });
    }

    const carDeleteHandler = () => {
        CarService.deleteCar(carAction.car.id);
        CloseClickHandler();

        setCars(cars.filter((car) => car.id !== carAction.car.id));
    }

    const carEditHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const newCar = Object.fromEntries(data);

        let copy = cars.filter((car) => car.id !== carAction.car.id);

        CarService.editCar(carAction.car.id, newCar)
            .then(() => {
                CloseClickHandler();
                setCars(state => [...copy, newCar]);
            });
    };

    return(
        <>
            {carAction.action === carActions.Info &&
                <CarDetails
                    car={carAction.car}
                    onCloseClick={CloseClickHandler}
                />
            }

            {carAction.action === carActions.Edit &&
                <CarEdit
                    car={carAction.car}
                    onCloseClick={CloseClickHandler}
                    onEditClick = {carEditHandler}
                />
            }

            {carAction.action === carActions.Delete &&
                <CarDelete
                    car={carAction.car}
                    oncloseClick={CloseClickHandler}
                    onDeleteClick={carDeleteHandler}
                />
            }

            {carAction.action === carActions.Add &&
                <CarCreate
                    onCloseClick={CloseClickHandler}
                    onCarCreate = {carCreateHandler}
                />
            }

        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        Brand<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                       data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                    </svg>
                    </th>
                    <th>
                        Model<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                      className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                    </svg>
                    </th>
                    <th>
                        Color<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                    </svg>
                    </th>
                    <th>
                        Year<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                        </path>
                    </svg>
                    </th>
                    <th>
                        Created
                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                            </path>
                        </svg>
                    </th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {cars?.map(car =>
                    <CarItem
                        key={car.id}
                        car={car}
                        onClick={carActionClickHandler}
                    />
                )}
                </tbody>
            </table>
        </div>

        <button className="btn-add btn" onClick={() => carActionClickHandler(null, carActions.Add)}>Add new user</button>
    </>
    );
}