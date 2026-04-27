resource "vercel_project_route" "rewrite_route" {
  project_id = vercel_project.frontend_project.id
  name       = "rewrite-routes"
  position = {
    placement = "start"
  }
  route = {
    src  = "/:path"
    dest = "/api/link/:path"
  }
}
