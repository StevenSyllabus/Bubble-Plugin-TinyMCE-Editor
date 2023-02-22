function(instance, context) {
    console.log(context.keys)
    console.log(`hello`)
    
    instance.canvas.id = "tinymce"
    
	tinymce.init({
    selector: "#tinymce"
})


}