import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
const CardClasses = ({ img, title, description }) => {
  return (
    <Card className="relative bg-white/20 backdrop-blur-3xl lg:w-80 rounded-lg">
      <CardHeader color="blue-gray" className="lg:h-56 mt-6 shadow-sm rounded-md">
        <img
          src={img}
          alt="Personas practicando jiu jitsu"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-2 text-white font-poppins">
          {title}
        </Typography>
        <Typography className="text-gray font-poppins">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-orange capitalize text-xs font-medium font-poppins rounded-md">Detalles</Button>
      </CardFooter>
    </Card>
  );
}

export default CardClasses