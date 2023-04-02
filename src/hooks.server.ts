import { connect } from '$db/mongo';

connect().then(():void => {
    console.log("MongoDB started");
}).catch(() => {
    console.log("MongoDB failed to start");
});