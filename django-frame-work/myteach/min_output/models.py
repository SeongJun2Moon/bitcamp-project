from django.db import models
from myteach.minimap_ward.models import MinimapWard


class MinOutput(models.Model):
    use_in_migration = True

    ward_place = models.AutoField(primary_key=True)
    x = models.IntegerField()
    y = models.IntegerField()

    minimap_ward = models.ForeignKey(MinimapWard, on_delete=models.CASCADE)

    class Meta:
        db_table = "min_output"

    def __str__(self):
        return f"{self.pk}, {self.x}, {self.y}"
