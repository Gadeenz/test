function success(req,res) {
    console.log("in datat")
    return res.json({
        success:1,
        data:data, 
        msg:"operation done successfuly"
    });
}

function fail(error) {
    return ({
        success:0,
        msg:"operation failed"
    });
}

module.exports = {
    success:success,
    fail:fail
}
/////////////////TESTUPDATE///////////HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
