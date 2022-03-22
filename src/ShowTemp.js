import React from 'react'
import './App.css';

function ShowTemp({text}) {
    return (
        <div className='back'>
            <div class="container my-5">
                <div>{text.city}</div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div>{text.timezone}</div>
                    <div>{text.lat}</div>
                    <div>{text.long}</div>
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Description</h5>
                            <p class="card-text">{text.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Temp</h5>
                            <p class="card-text">{text.temp}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Temp Min</h5>
                            <p class="card-text">{text.temp_min}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Temp Max</h5>
                            <p class="card-text">{text.temp_max}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Humidity</h5>
                            <p class="card-text">{text.humidity}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sunrise</h5>
                            <p class="card-text">{text.sunrise}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Sunset</h5>
                            <p class="card-text">{text.sunset}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Country</h5>
                            <p class="card-text">{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


    )
}

export default ShowTemp;