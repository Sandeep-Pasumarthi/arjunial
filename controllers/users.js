module.exports.profile = function(request, response) {
    return response.render("users", {
        title: "User Profile"
    });
};
