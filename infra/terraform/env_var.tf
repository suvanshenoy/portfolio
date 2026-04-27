resource "vercel_project_environment_variables" "backend_envar" {
  project_id = vercel_project.backend_project.id
  variables = [
    { key       = "PORTFOLIO_FRONTEND_URL"
      value     = var.frontend_url
      target    = ["production"]
      sensitive = true
    },
    {
      key       = "DATABASE_URL"
      value     = var.database_url
      target    = ["production"]
      sensitive = true
    }
  ]
}


resource "vercel_project_environment_variable" "frontend_envar" {
  project_id = vercel_project.frontend_project.id
  key        = "PORTFOLIO_BACKEND_URL"
  value      = var.backend_url
  target     = ["production"]
  sensitive  = true
}
