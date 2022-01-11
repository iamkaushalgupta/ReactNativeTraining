import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { apiTesting } from '../controllers/testController';
import { TestRoot } from '../controllers/apiResponses/testApiResponses'
import { IApiResponse } from '../controllers/apiResponses/IApiResponse';
import Demo from '../views/redux/demo';

function TestModel(props: object) {

    const fetchTestData = async () => {
        let getTeingData: IApiResponse<TestRoot> = await apiTesting('https://gorest.co.in/public/v1/users');
        console.log("api_call", JSON.stringify(getTeingData));
    }

    useEffect(() => {
        fetchTestData();
    }, [])

    return (
        <View>
            <Text><Demo /></Text>
        </View>
    );
}

export default TestModel;