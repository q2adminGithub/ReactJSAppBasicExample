
#* @apiTitle  Square of a number
#* @apiDescription An API that computes the square of a number
#* @param x
#* @get /square
#* @post /square
square_function <- function(x) {
  x <- as.numeric(x)
  x
  return(x^2)

}

#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  res$setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  res$setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
  plumber::forward()
}