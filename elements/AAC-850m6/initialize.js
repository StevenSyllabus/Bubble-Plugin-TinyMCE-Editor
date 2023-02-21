function(instance, context) {
    console.log(context.keys)
    
    instance.canvas.id = "tinymce"
    
	tinymce.init({
    selector: "#tinymce"
})


}