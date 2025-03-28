include ./secrets.Makefile
prefix := data503
pod_name := $(prefix)-pod
scraper_name := $(prefix)-scraper
database_name := $(prefix)-database
database_port := 5432

run_image: start_db
	@echo "Running scraper"
	@podman run --rm --pod $(pod_name) --name $(scraper_name) \
		-e "DATABASE_URL=postgresql://postgres:$(database_password)@$(database_name):$(database_port)/" \
		-e "POSTGRES_PASSWORD=$(database_password)" \
		-e "OPENWEATHER_KEY=$(openweather_key)" \
		-e "TRIMET_APP_ID=$(trimet_app_id)" \
		-d $(scraper_name)
start_db: pod
	@echo "Starting database"
	@podman run --rm --pod $(pod_name) \
		--name $(database_name) \
		-e "POSTGRES_PASSWORD=$(database_password)" \
		--mount=type=bind,src=$(shell realpath ./data),dst=/var/lib/postgresql/data \
		-d $(database_name) postgres
pod: image
	podman pod create $(pod_name)
image: clean
	podman build -t $(scraper_name) ./scraper
	podman build -t $(database_name) ./database

clean:
	podman rm -f $(scraper_name) $(database_name)
	podman rmi -f $(scraper_name) $(database_name)
	podman pod rm -f $(pod_name)
