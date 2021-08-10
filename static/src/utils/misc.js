/* eslint max-len: 0, no-param-reassign: 0 */

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];


        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}


export function parseJSON(response) {
    return response.data;
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const getDatesThisWeek = (date=null) => {
    if(date==null) {
        date = new Date(Date.now());
    }

    const day = date.getDay();

    const deltas = [...Array(7).keys()]

    var ret = deltas.map(delta => {
        var d = new Date();
        d.setDate(date.getDate() + (delta-day))
        return d;
    });

    ret = ret.map((d) => {
        var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    });

    return ret;
}

export const getUnitsOfADay = () => {
    var ret = [];
    for(var h=0; h<24; h++) {
        var hour = '' + h;
        if(hour.length < 2)
            hour = '0' + hour;
        ret.push(hour + ":" + "00");
        ret.push(hour + ":" + "30");
    }
    return ret;
}
